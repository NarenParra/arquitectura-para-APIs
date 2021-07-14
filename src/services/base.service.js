class BaseService {
    constructor(repository){
        this.repository = repository;
    }

    async get(id){
        if(!id){
            const error = new Error();
            error.status = 400;
            error,message = "id must be sent";
            throw error
        }

        const currentEntity = await this.repository.get(id);

        if(!currentEntity){
            const error = new Error();
            error.status = 404;
            error,message = "Entity does not found";
            throw error
        }

        return currentEntity;
    }

    async getAll(id){
        return await this.repository.getAll();
    }

    async create(entity){
        return await this.repository.create(entity);
    }

    async udate(id, entity){

        if(!id){
            const error = new Error();
            error.status = 400;
            error,message = "id must be sent";
            throw error
        }

        return await this.repository.udate(id, entity);
    }

    async delete(id){

        if(!id){
            const error = new Error();
            error.status = 400;
            error,message = "id must be sent";
            throw error
        }
        
        return await this.repository.delete(id);
    }
}

module.exports = BaseService;