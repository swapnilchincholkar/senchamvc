class BusinessesController < ApplicationController

  # GET /businesses
  # GET /businesses.xml
  def index
    @businesses = Business.all

    respond_to do |format|
      format.html # index.html.erb
      format.xml  { render :xml => @businesses }
      format.json {render :json => {:businesses =>  @businesses.as_json}}
    end
  end

  # GET /businesses/1
  # GET /businesses/1.xml
  def show
    @business = Business.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.xml  { render :xml => @business }
    end
  end

  # GET /businesses/new
  # GET /businesses/new.xml
  def new
    @business = Business.new

    respond_to do |format|
      format.html # new.html.erb
      format.xml  { render :xml => @business }
    end
  end

  # GET /businesses/1/edit
  def edit
    @business = Business.find(params[:id])
  end

  # POST /businesses
  # POST /businesses.xml
  def create
    @business = Business.new(params[:business])

    respond_to do |format|
      if @business.save
        format.html { redirect_to(@business, :notice => 'Business was successfully created.') }
        format.xml  { render :xml => @business, :status => :created, :location => @business }
      else
        format.html { render :action => "new" }
        format.xml  { render :xml => @business.errors, :status => :unprocessable_entity }
      end
    end
  end

  # PUT /businesses/1
  # PUT /businesses/1.xml
  def update
    @business = Business.find(params[:id])

    respond_to do |format|
      if @business.update_attributes(params[:business])
        format.html { redirect_to(@business, :notice => 'Business was successfully updated.') }
        format.xml  { head :ok }
      else
        format.html { render :action => "edit" }
        format.xml  { render :xml => @business.errors, :status => :unprocessable_entity }
      end
    end
  end

  # DELETE /businesses/1
  # DELETE /businesses/1.xml
  def destroy
    @business = Business.find(params[:id])
    @business.destroy

    respond_to do |format|
      format.html { redirect_to(businesses_url) }
      format.xml  { head :ok }
    end
  end
end
