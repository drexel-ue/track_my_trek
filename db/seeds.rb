require 'faker'

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

track = User.find_by(username: 'track@trecker.com')
trek = User.find_by(username: 'trek@tracker.com')

if !track
    User.create(
        {
            first_name: 'Trek',
            last_name: 'Tracker',
            gender: 'quasar',
            username: 'trek@tracker.com',
            password: 'test123',
            subscribed: Faker::Boolean.boolean,
            country: Faker::Nation.capital_city,
            birth_date: Faker::Date.birthday
        }
    )
end

if !trek
    User.create(
        {
            first_name: 'Track',
            last_name: 'Trecker',
            gender: 'fimpsybuffet',
            username: 'track@trecker.com',
            password: 'test123',
            subscribed: Faker::Boolean.boolean,
            country: Faker::Nation.capital_city,
            birth_date: Faker::Date.birthday
        }
    )
end



40.times do 
    fake = {
        username: Faker::Internet.username,
        password: 'test123',
        first_name: Faker::Name.first_name,
        last_name: Faker::Name.last_name,
        gender: Faker::Gender.binary_type,
        subscribed: Faker::Boolean.boolean,
        country: Faker::Nation.capital_city,
        birth_date: Faker::Date.birthday,
        }
    user = User.create(fake)
end


