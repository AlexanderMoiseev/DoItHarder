class Exercise < ApplicationRecord
  belongs_to :user
  has_many :exercise_sets
  has_and_belongs_to_many :routines
  
  accepts_nested_attributes_for :exercise_sets
end
