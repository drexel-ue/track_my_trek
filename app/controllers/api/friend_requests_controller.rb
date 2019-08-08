class Api::FriendRequestsController < ApplicationController
    def create
        data = {
            requester_id: current_user.id,
            requestee_id: params[:userId]
        }
        @request = FriendRequest.create!(data)
    end

    def update

    end
end