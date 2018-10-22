require 'sinatra/base'

class RubyServer < Sinatra::Base
  set :bind, '0.0.0.0'
  set :port, 5000
  
  analyzer = Sentimental.new
  analyzer.load_defaults

  post "/analyse/sentiment" do
    data = JSON.parse request.body.read
    score = analyzer.score data['sentence']
    result = {
      'polarity' => score,
    }
    JSON[result]
  end
end
