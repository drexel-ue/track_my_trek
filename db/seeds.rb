require 'faker'

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

40.times do 
    user = User.create({first_name: Faker::Name.name, last_name: Faker::Name.name, gender: Faker::Gender, username: Faker::Internet.email, password: 'test123'})
end
