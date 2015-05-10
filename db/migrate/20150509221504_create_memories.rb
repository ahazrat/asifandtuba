class CreateMemories < ActiveRecord::Migration
  def change
    create_table :memories do |t|
      t.string :title
      t.string :url
      t.string :thumbnail
      t.timestamps
    end
  end
end
