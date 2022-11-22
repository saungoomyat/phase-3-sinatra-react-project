class Calender < ActiveRecord::Base
    has_many :activities
    has_many :chores
  end