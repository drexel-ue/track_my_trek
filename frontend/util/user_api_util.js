export const fetchUser = id =>
  $.ajax({
    url: `api/users/${userId}`,
    method: "get"
  });
