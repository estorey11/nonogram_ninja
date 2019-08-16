class CreateNonograms < ActiveRecord::Migration[5.2]
  def change
    create_table :nonograms do |t|
      t.text :solution
      t.string :name
      t.integer :height
      t.integer :width
      t.integer :user_id

      t.timestamps
    end
  end
end
