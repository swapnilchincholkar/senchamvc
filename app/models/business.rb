class Business < ActiveRecord::Base

  def as_json(options = {})
    options ||= {}
    options[:except] = [:created_at, :updated_at]
    super
  end

end
