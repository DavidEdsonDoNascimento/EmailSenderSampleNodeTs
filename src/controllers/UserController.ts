
interface User {
    name: string;
    email: string;
    data_nascimento?: string;
}

const users: User[] = [
    {
        name: 'João Silva',
        email: 'joao.silva@gmail.com',
        data_nascimento: '12/07/1992'
    },
    {
        name: 'Raisa Silva',
        email: 'raisa.silva@gmail.com',
        data_nascimento: '12/07/1995'
    }
];

export default {
    
    list: async () => {
        return users;
    },
    create: async (user: User) => {
        
        users.push(user);

        return user;
    }
}