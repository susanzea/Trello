# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Card.delete_all
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

l1 = List.create!(
    title: 'Entertainment',
    board_id: b1.id
)

l2 = List.create!(
    title: 'Fire Drill',
    board_id: b2.id
)

l3 = List.create!(
    title: 'CPR Demo',
    board_id: b2.id
)

l4 = List.create!(
    title: 'Prep',
    board_id: b4.id
)



###CARDS
c1 = Card.create!(
    title: "Confirm with Darryl's band",
    user_id: u1.id,
    list_id: l1.id
)

c2 = Card.create!(
    title: "Finish writing song that I'm singing for Toby",
    user_id: u1.id,
    list_id: l1.id
)

c3 = Card.create!(
    title: "Buy fireworks",
    user_id: u1.id,
    list_id: l1.id
)

c4 = Card.create!(
    title: "Give fire department a heads up",
    user_id: u1.id,
    list_id: l2.id
)

c5 = Card.create!(
    title: "Locate fire extinguisher in office",
    user_id: u1.id,
    list_id: l2.id
)

c6 = Card.create!(
    title: "Get CPR dummy",
    user_id: u1.id,
    list_id: l3.id
)

c7 = Card.create!(
    title: "Download `Stayin' Alive` by the Bee Gees",
    user_id: u1.id,
    list_id: l3.id
)

c8 = Card.create!(
    title: "Hang plasma screen",
    user_id: u1.id,
    list_id: l4.id
)
