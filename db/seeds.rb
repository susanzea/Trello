# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Board.delete_all
Workspace.delete_all
User.delete_all


# USERS
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


# WORKSPACES
w1 = Workspace.create!(
    title: 'Work',
    user_id: u1.id
)

w2 = Workspace.create!(
    title: 'Home',
    user_id: u1.id
)


# BOARDS
b1 = Board.create!(
    title: "Toby's Goodbye Party",
    workspace_id: w1.id
)

b2 = Board.create!(
    title: 'Safety Training Day',
    workspace_id: w1.id
)

b3 = Board.create!(
    title: 'Office Olympics',
    workspace_id: w1.id
)

b4 = Board.create!(
    title: "Michael's Birthday",
    workspace_id: w2.id
)

b5 = Board.create!(
    title: 'Dinner Party',
    workspace_id: w2.id
)