module.exports = (sequelize, Sequelize) => {
    const Client = sequelize.define('Clients', {
        client_id: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        email: {
            type: Sequelize.STRING,

        }
    });

    return Client;
};