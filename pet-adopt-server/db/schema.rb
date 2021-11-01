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

ActiveRecord::Schema.define(version: 2021_10_31_185512) do

  create_table "cats", force: :cascade do |t|
    t.string "name"
    t.string "breed"
    t.string "image_url"
    t.integer "age"
    t.integer "price"
    t.string "note"
    t.integer "shelter_id"
  end

  create_table "dogs", force: :cascade do |t|
    t.string "name"
    t.string "breed"
    t.string "image_url"
    t.integer "age"
    t.float "price"
    t.string "note"
    t.integer "shelter_id"
  end

  create_table "exotics", force: :cascade do |t|
    t.string "name"
    t.string "breed"
    t.string "image_url"
    t.integer "age"
    t.integer "price"
    t.string "note"
    t.integer "shelter_id"
  end

  create_table "families", force: :cascade do |t|
    t.string "name"
    t.integer "age"
    t.integer "price"
    t.string "note"
    t.integer "individual_seller_id"
  end

  create_table "individuals", force: :cascade do |t|
    t.string "seller_name"
    t.string "note"
  end

  create_table "shelters", force: :cascade do |t|
    t.string "name"
    t.string "shelter_img_url"
    t.string "address"
    t.string "shelter_notes"
    t.integer "shelter_rating"
    t.string "kill_shelter"
  end

  create_table "specials", force: :cascade do |t|
    t.string "name"
    t.string "breed"
    t.string "image_url"
    t.integer "age"
    t.integer "price"
    t.string "note"
    t.integer "shelter_id"
  end

end
