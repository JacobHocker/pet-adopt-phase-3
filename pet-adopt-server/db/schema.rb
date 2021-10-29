# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_10_28_185047) do

  create_table "cats", force: :cascade do |t|
    t.string "name"
    t.string "breed"
    t.string "image_url"
    t.integer "age"
    t.float "price"
    t.string "note"
    t.boolean "kid_friendly"
    t.boolean "outdoor_animal"
    t.boolean "animal_aggressive"
    t.integer "shelter_id"
  end

  create_table "dogs", force: :cascade do |t|
    t.string "name"
    t.string "breed"
    t.string "image_url"
    t.integer "age"
    t.float "price"
    t.string "note"
    t.boolean "kid_friendly"
    t.boolean "outdoor_animal"
    t.boolean "animal_aggressive"
    t.integer "shelter_id"
  end

  create_table "exotic_pets", force: :cascade do |t|
    t.string "name"
    t.string "breed"
    t.string "image_url"
    t.integer "age"
    t.float "price"
    t.string "note"
    t.boolean "kid_friendly"
    t.boolean "outdoor_animal"
    t.boolean "animal_aggressive"
    t.integer "shelter_id"
  end

  create_table "shelters", force: :cascade do |t|
    t.string "name"
    t.string "shelter_img_url"
    t.string "address"
    t.string "shelter_notes"
    t.float "shelter_rating"
    t.boolean "kill_shelter"
  end

  create_table "special_and_service_pets", force: :cascade do |t|
    t.string "name"
    t.string "breed"
    t.string "image_url"
    t.integer "age"
    t.float "price"
    t.string "note"
    t.string "special_needs"
    t.string "service"
    t.integer "shelter_id"
  end

end
