# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ :name => 'Chicago' }, { :name => 'Copenhagen' }])
#   Mayor.create(:name => 'Daley', :city => cities.first)
Business.create(:name => 'Josh Software', :address => 'Thube Park,Shivajinagar,Pune')
Business.create(:name => 'Dominos Pizza', :address => 'Warali East, Mumbai, India')
Business.create(:name => 'City Rider Bikes', :address => 'Zaweri Bazar,Delhi,India')
Business.create(:name => 'Pancake Factory', :address => 'East Street, London')
Business.create(:name => 'Flower Shoppie', :address => 'Park Glen Place, Durham')
Business.create(:name => 'Food Bazar', :address => 'Bronx, 10451')

Organization.create(:name => 'Red Cross')
Organization.create(:name => 'Samhita')
Organization.create(:name => 'Players Association')
Organization.create(:name => 'India AIDS group')
Organization.create(:name => 'National film organization')
Organization.create(:name => 'Open source contruibutors')
Organization.create(:name => 'Healthcare Foundations')
Organization.create(:name => 'Cheat Funds')
Organization.create(:name => 'Musicians Group USA')
