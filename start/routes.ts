import Route from '@ioc:Adonis/Core/Route'
import 'App/Modules/User/routes'

Route.group(() => {
  Route.get('/', async () => {
    return { hello: 'Hello there!s' }
  })

  Route.post('login', 'AuthController.login')
}).prefix('/api')
