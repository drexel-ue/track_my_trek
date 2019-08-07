# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_08_07_195150) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "friend_requests", force: :cascade do |t|
    t.integer "requester_id", null: false
    t.integer "requestee_id", null: false
    t.boolean "accepted", default: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["requestee_id"], name: "index_friend_requests_on_requestee_id"
    t.index ["requester_id"], name: "index_friend_requests_on_requester_id"
  end

  create_table "points", force: :cascade do |t|
    t.decimal "lat", null: false
    t.decimal "lng", null: false
    t.integer "trek_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["trek_id"], name: "index_points_on_trek_id"
  end

  create_table "treks", force: :cascade do |t|
    t.string "map_name", null: false
    t.string "activity", null: false
    t.text "description"
    t.string "starts_from"
    t.string "privacy", default: "friends"
    t.integer "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.decimal "distance", precision: 5, scale: 2
    t.decimal "climb", precision: 5, scale: 2
    t.string "begins_in"
    t.index ["user_id"], name: "index_treks_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.string "first_name", null: false
    t.string "last_name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "gender", null: false
    t.boolean "subscribed"
    t.string "country"
    t.date "birth_date"
    t.string "friends", default: [], array: true
  end

  create_table "waypoints", force: :cascade do |t|
    t.decimal "lat", null: false
    t.decimal "lng", null: false
    t.integer "trek_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["trek_id"], name: "index_waypoints_on_trek_id"
  end

end
