require 'sinatra/base'

class RubyServer < Sinatra::Base
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
