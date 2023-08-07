import { Router } from 'express'
import { UsersController } from './controllers/usersController'

const routes = Router()
const usersController = new UsersController()

routes.get('/users', usersController.listarUsuario)

routes.post('/users', usersController.criarUsuario)

export { routes }

/*

  ** STATUS CODe**
 //200 deu certo
 // 201 foi criada
 // 404 nap encontrado

  **Metodos HTTP**

 GET- Ler os dados
 POST- Criar os dados
 PUT/PATH - editar os dados
 DELETE - deletar os dados*/


