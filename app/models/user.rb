class User < ActiveRecord::Base
  # Include default devise modules.
  devise :database_authenticatable, :registerable,
           :rememberable, :trackable, :omniauthable,
           :validatable #,:recoverable,:confirmable
  include DeviseTokenAuth::Concerns::User
end