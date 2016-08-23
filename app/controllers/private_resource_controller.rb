class PrivateResourceController < ApplicationController

    before_action :authenticate_user!

    def index
        response = {
            data: 'Private Content for ' + current_user.email
        }

        render json: response
    end

end
