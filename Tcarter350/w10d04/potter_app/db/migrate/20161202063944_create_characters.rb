class CreateCharacters < ActiveRecord::Migration[5.0]
  def change
    create_table :characters do |t|
      t.string :name
      t.string :hair_colour
      t.string :house
      t.string :wand
      t.string :patronus
      t.float :badass_rating
      t.string :image

      t.timestamps
    end
  end
end
