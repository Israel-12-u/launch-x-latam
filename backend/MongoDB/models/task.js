const CosmosClient = require('@azure/cosmos').CosmosClient;
const debug = require('debug')('todo-cosmos:task');

let partitionKey = undefined;

/* Esta es el modelo de datos */
class Task {
    /**
     * lee, añade y actualiza tareas en cosmosDB
     * @param {CosmosClient} cosmosClient
     * @param {string} databaseID
     * @param {string} containerId
     */
    constructor(cosmosClient, databaseID, containerId) {
        this.client = cosmosClient;
        this.databaseID = databaseID;
        this.containerId = containerId;

        this.database = null;
        this.container = null;
    }

    async init() {
        debug('Inicializando DB');

        const dbResponse = await this.client.databases.createIfNotExists({
            id: this.databaseID
        });

        this.database = dbResponse.database;

        debug('Inicializando contenedor...');
        const contResponse = await this.database.containers.createIfNotExists(
            {
                id: this.containerId
            }
        );
        this.container = contResponse.container;

    }
    /**
     *  Encuentra un objeto en la base de datos
     * @param {String} querySpec
     * 
     */
    async find(querySpec) {
        debug('Buscando en la base de datos...');
        if (!this.container) {
            throw new Error('Contenedor no se a inicializado');
        }
        const { resources } = await this.container.items.query(querySpec).fetchAll();

        return resources;
    }
    /**
     * crea el item enviado en Cosmos DB
     * @param {*} item 
     * @returns {resource} Item de la base de datos 
     */
    async addItem(item) {
        debug('añadiendo item a la bd');
        item.date = Date.now();
        item.completed = false;
        const { recurce: doc } = await this.container.items.create(item);

        return doc;
    }

    /**
     * 
     * @param {string} itemID 
     * @returns 
     */
    async updateItem(itemID) {
        debug('Actualizando Item');
        const doc = await this.getItem(itemID);
        doc.completed = true;

        const { recurce: replaced } = await this.container.item(itemID, partitionKey).replace(doc);
        return replaced;
    }
    /**
     * 
     * @param {*} itemID 
     * @returns 
     */
    async getItem(itemID) {
        debug('Buscando Item en la BD');
        const { recurce } = await this.container.item(itemID, partitionKey);
        return recurce;
    }
}

module.exports = Task;