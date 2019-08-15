class NonogramSerializer < ActiveModel::Serializer
  attributes :id, :solution, :height, :width, :user_id
end
