import NodeCache from 'node-cache';
import pool from '../configs/dbConfigs.js';

const cache = new NodeCache({ stdTTL: 300 }); // Cache entries live for 5 minutes

class Repository {
  constructor(tableName) {
    this.tableName = tableName;
  }

  buildWhereClause(whereClause) {
    const keys = Object.keys(whereClause);
    const values = Object.values(whereClause);
    const conditions = keys.map((key, index) => `${key} = $${index + 1}`).join(' AND ');
    return { conditions, values };
  }

  async findAll(whereClause = {}) {
    try {
      const { conditions, values } = this.buildWhereClause(whereClause);
      const query = conditions
        ? `SELECT * FROM ${this.tableName} WHERE ${conditions}`
        : `SELECT * FROM ${this.tableName}`;

      const cacheKey = `${this.tableName}_findAll_${JSON.stringify(whereClause)}`;
      const cachedResult = cache.get(cacheKey);

      if (cachedResult) return cachedResult;

      const result = await pool.query(query, values);
      cache.set(cacheKey, result.rows);
      return result.rows;
    } catch (error) {
      console.error(`Error in findAll for ${this.tableName}:`, error);
      throw error;
    }
  }

  async update(id, data) {
    try {
      const keys = Object.keys(data);
      const values = Object.values(data);

      const setClause = keys.map((key, index) => `${key} = $${index + 1}`).join(', ');

      const query = `UPDATE ${this.tableName} SET ${setClause} WHERE id = $${keys.length + 1} RETURNING *`;

      const result = await pool.query(query, [...values, id]);
      return result.rows[0];
    } catch (error) {
      console.error(`Error in update for ${this.tableName}:`, error);
      throw error;
    }
  }

  async delete(id) {
    try {
      const query = `DELETE FROM ${this.tableName} WHERE id = $1 RETURNING *`;
      const result = await pool.query(query, [id]);
      return result.rows[0];
    } catch (error) {
      console.error(`Error in delete for ${this.tableName}:`, error);
      throw error;
    }
  }

  async findOne(whereClause) {
    try {
      const { conditions, values } = this.buildWhereClause(whereClause);

      const query = `SELECT * FROM ${this.tableName} WHERE ${conditions} LIMIT 1`;

      const result = await pool.query(query, values);      

      return result.rows[0] || null;
    } catch (error) {
      console.error(`Error in findOne for ${this.tableName}:`, error);
      throw error;
    }
  }

  async findById(id) {
    try {
      const query = `SELECT * FROM ${this.tableName} WHERE id = $1`;
      const result = await pool.query(query, [id]);
      return result.rows[0];
    } catch (error) {
      console.error(`Error in findById for ${this.tableName}:`, error);
      throw error;
    }
  }

  async save(data) {
    try {
      const keys = Object.keys(data);
      const values = Object.values(data);
      const placeholders = keys.map((_, index) => `$${index + 1}`).join(', ');

      const query = `
        INSERT INTO ${this.tableName} (${keys.join(', ')})
        VALUES (${placeholders}) RETURNING *;
      `;

      const result = await pool.query(query, values);
      return result.rows[0];
    } catch (error) {
      console.error(`Error in save for ${this.tableName}:`, error);
      throw error;
    }
  }
}

export default Repository;
