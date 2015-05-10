class CreateMemories < ActiveRecord::Migration
  def change
    create_table :memories do |t|
      t.string :title
      t.string :imgurl
      t.string :thumurl

      t.timestamps null: false
    end
  end
end
