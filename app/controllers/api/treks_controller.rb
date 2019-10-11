class Api::TreksController < ApplicationController
    def create
        data = trek_params
        data[:user_id] = current_user.id
        distance = data[:distance].to_d.round(2)
        climb = data[:climb].to_d.round(2)
        begins_in = data[:begins_in]
        date =  Date.today()
        data[:description] ||= "This is a #{distance} mi route in #{begins_in}. The route has a total ascent of #{climb} ft. This route was created by #{current_user.first_name} #{current_user.last_name} on #{date}."
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

        points = params[:points].values
        points.each do |point|
            point[:trek_id] = @trek.id
        end
        Point.create(points)
    end

    def show
        @trek = Trek.find(params[:id])
        @user = User.find(@trek.user_id)
        @waypoints = Waypoint.where(['trek_id = :id', {id: @trek.id}])
        @points = Point.where(['trek_id = :id', {id: @trek.id}])
    end

    def index
        @treks = Trek.includes([:user, :waypoints, :points])
    end

    private

    def trek_params
        params.require(:trek).permit(:activity, :map_name, :user_id,
             :description, :distance, :climb, :begins_in)
    end

    def waypoint_params
        params.require(:waypoints).permit(:lat, :lng, :trek_id)
    end

    def point_params
        params.require(:points).permit(:lat, :lng, :trek_id)
    end

end
