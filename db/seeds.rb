# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Workspace.delete_all
User.delete_all




u1 = User.create!(
    username: 'demo_user',
    email: 'demo@user.com',
    full_name: 'Demo User',
    password: 'password'
)

u2 = User.create!(
    username: 'andrés_g',
    email: 'andrés_g@gmail.com',
    full_name: 'Andrés G',
    password: 'password'
)

w1 = Workspace.create!(
    title: 'Work',
    user_id: u1.id
)

w1 = Workspace.create!(
    title: 'Home',
    user_id: u1.id
)