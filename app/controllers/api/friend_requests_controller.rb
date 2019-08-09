class Api::FriendRequestsController < ApplicationController
    def create
        data = {
            requester_id: current_user.id,
            requestee_id: params[:userId]
        }

        @request = FriendRequest.create!(data)
    end

    def update
        FriendRequest.where(id: params[:id]).update(accepted: true)
        @request = FriendRequest.find(params[:id])
    end

    def destroy
        FriendRequest.delete(params[:id])
    end
end