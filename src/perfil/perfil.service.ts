import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import { catchError } from 'rxjs';


@Injectable()
export class PerfilService {
    private users: any[];

    constructor() {
        this.loadUsers(); //vai carregar usuarios do json ate se atualizar
    }

    private loadUsers() {
        const filePath = path.join(__dirname,'../../src/data/users.json'); //caminho do arquivo json
        try {
            const data = fs.readFileSync(filePath, 'utf-8');
            this.users = JSON.parse(data);
        } catch (error) {
            console.error('erro ao carregar arquivos de usuarios:', error);
            this.users = []; //inicializa a lista de usuarios como vaziaem caso de erro
        }
        
    }

    findAll(){
        return this.users; // Retorna todos os usuarios
    }

    findOne(id: string) {
        return this.users.find(user => user.id === id); // RTetorna um usuario pelo ID
    }

    create(user: any) {
        this.users.push(user); // adiciona um novo usuario a lista ainda em memoria
        this.saveUsers();
        return user; // retorna um usuario criado
    }

    private saveUsers() {
        const filePath = path.join(__dirname, 'users.json');
        fs.writeFileSync(filePath, JSON.stringify(this.users, null, 2));// salva os usuarios no arquivo
    }
}