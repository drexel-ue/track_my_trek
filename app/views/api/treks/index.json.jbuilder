json.treks do
    json.array! @treks, partial: 'api/treks/trek', as: :trek
end