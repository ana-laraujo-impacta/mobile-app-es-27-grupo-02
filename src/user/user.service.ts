import { Injectable, Logger } from '@nestjs/common';
import { User } from './user.entity'; // Ajuste o caminho conforme necessário
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class UserService {
    private users: User[] = [];
    private readonly logger = new Logger(UserService.name);

    constructor() {
        this.loadUsers();
    }

    private loadUsers() {
        const filePath = path.join(__dirname, '../../src/data/login.json'); // Ajuste conforme a estrutura do seu projeto
        const jsonData = fs.readFileSync(filePath, 'utf8');
        this.users = JSON.parse(jsonData);
        this.logger.log(`Usuários carregados: ${JSON.stringify(this.users)}`);
    }

    public async getList(): Promise<User[]> {
        return this.users;
    }

    public async getByUsername(username: string): Promise<User | undefined> {
        const user = this.users.find(user => user.username === username);
        this.logger.log(`Buscando usuário: ${username} - Resultado: ${JSON.stringify(user)}`);
        return user;
    }

    public async getById(id: number): Promise<User | undefined> {
        return this.users.find(user => user.id === id);
    }

    public async create(userData: User): Promise<User | undefined> {
        // Verifica se o nome de usuário já existe
        const existingUser = await this.getByUsername(userData.username);
        if (existingUser) {
            return undefined; // Ou lance uma exceção, se preferir
        }

        // Gera um novo ID para o usuário
        const newId = this.users.length > 0 ? Math.max(...this.users.map(user => user.id)) + 1 : 1;
        const newUser = { ...userData, id: newId };
        
        this.users.push(newUser);
        this.saveUsers(); // Salva a lista atualizada no arquivo JSON

        return newUser;
    }

    public async update(id: number, userData: User): Promise<User | undefined> {
        const index = this.users.findIndex(user => user.id === id);
        if (index === -1) {
            return undefined; // Usuário não encontrado
        }

        // Atualiza os dados do usuário
        this.users[index] = { ...this.users[index], ...userData };
        this.saveUsers(); // Salva as alterações no arquivo JSON

        return this.users[index];
    }

    public async remove(id: number): Promise<boolean> {
        const index = this.users.findIndex(user => user.id === id);
        if (index === -1) {
            return false; // Usuário não encontrado
        }

        this.users.splice(index, 1); // Remove o usuário da lista
        this.saveUsers(); // Salva as alterações no arquivo JSON

        return true;
    }

    public removePassword(user: User) {
        const { password, ...rest } = user;
        return rest;
    }

    private saveUsers() {
        const filePath = path.join(__dirname, '../../src/data/login.json'); // Ajuste conforme a estrutura do seu projeto
        fs.writeFileSync(filePath, JSON.stringify(this.users, null, 2)); // Salva a lista de usuários no formato JSON
    }
}
