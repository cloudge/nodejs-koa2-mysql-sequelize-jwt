const db = require('../config/db');
const Sequelize = db.sequelize;
const Category = Sequelize.import('../schema/category');

Category.sync({force: false});

class CategoryModel {
    /**
     * 创建分类
     * @param data
     * @returns {Promise<*>}
     */
    static async createCategory(data) {
        return await Category.create({
            name: data.name
        })
    }

    /**
     * 更新分类数据
     * @param id  分类ID
     * @param data  事项的状态
     * @returns {Promise.<boolean>}
     */
    static async updateCategory(id, data) {
        await Category.update({
            name: data.name
        }, {
            where: {
                id
            },
            fields: ['name']
        });
        return true
    }

    /**
     * 获取分类列表
     * @returns {Promise<*>}
     */
    static async getCategoryList() {
        return await Category.findAll({
            attributes: ['id', 'name']
        })
    }

    /**
     * 获取分类详情数据
     * @param id  文章ID
     * @returns {Promise<Model>}
     */
    static async getCategoryDetail(id) {
        return await Category.findOne({
            where: {
                id,
            },
        })
    }

    /**
     * 删除分类
     * @param id
     * @returns {Promise.<boolean>}
     */
    static async deleteCategory(id) {
        await Category.destroy({
            where: {
                id,
            }
        })
        return true
    }

}

module.exports = CategoryModel
