class CreateNonograms < ActiveRecord::Migration[5.2]
  def change
    create_table :nonograms do |t|
      t.binary :solution
      t.integer :height
      t.integer :width
      t.integer :user_id

      t.timestamps
    end
  end
end
