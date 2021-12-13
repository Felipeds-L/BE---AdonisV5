import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class UserSeeder extends BaseSeeder {

  public static developmentOnly = true

  public async run () {
    await User.createMany([
      {
        username: 'Milkinho',
        email: 'milkinho@adonisjs.com',
        password: 'secret',
      },
      {
        username: 'Matheus',
        email: 'Matheus@adonisjs.com',
        password: 'supersecret'
      }
    ])
  }

}
