class Api::TreksController < ApplicationController
    def create
        data = trek_params
        data[:user_id] = current_user.id
        distance = data[:distance]
        climb = data[:climb]
        date =  Date.today()
        data[:description] ||= "This is a #{distance} mi route in Cleveland, OH, United States. The route has a total ascent of #{climb} ft. This route was created by #{current_user.first_name} #{current_user.last_name} on #{date}."
        @trek = Trek.new(data)
        if @trek.save
            render :create
        else
            @errors = @trek.errors.full_messages
            render :errors, status: 400
        end

        waypoints = params[:waypoints].values
        waypoints.each do |point|
            point[:trek_id] = @trek.id
        end

        Waypoint.create(waypoints)
    end

    def show
        @trek = Trek.find(params[:id])
        @user = User.find(@trek.user_id)
        @waypoints = Waypoint.where(['trek_id = :id', {id: @trek.id}])
    end

    private

    def trek_params
        params.require(:trek).permit(:activity, :map_name, :user_id, :description, :distance, :climb)
    end

    def waypoint_params
        params.require(:waypoints).permit(:lat, :lng, :trek_id)
    end

end
