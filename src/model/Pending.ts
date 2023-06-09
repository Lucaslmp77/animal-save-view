export interface pendings
{
    id: number,
    active: boolean,
    register: Date,
    update: Date,
    firstName: string,
    businessName: string,
    fantasyName: string,
    lastName: string,
    contact: number,
    cpf: number,
    address: {
        id: number,
        active: boolean,
        register: Date,
        update: Date,
        cep: number,
        neighborhood: string,
        road: string,
        houseNumber: number
    },
    user: {
        id: number,
        login: string,
        password: string,
        approved: boolean,
        pending: boolean,
        rejected: boolean
        roles:
            {
                id: number,
                authority: string
            }
        ,
        authorities:[
            {
                id: number,
                authority: string
            }
        ],
        username: string,
        credentialsNonExpired: boolean,
        accountNonExpired: boolean,
        accountNonLocked: boolean
    },
}