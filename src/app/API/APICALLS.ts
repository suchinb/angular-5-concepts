export const APICALLS = [
  {
    cmd: 'getPerson',
    call: '/person/v3/persons/{userId}',
    type: 'GET',
    accepts: 'application/vnd.com.covisint.platform.person.v1+json;lastlogindate=true',
    contentType: 'application/json'
  },
  {
    cmd: 'getPersonRoles',
    cmdType: 'secured',
    call: '/person/v3/persons/roles/{userId}',
    type: 'GET',
    accepts: 'application/vnd.com.covisint.platform.person.role.v1+json',
    contentType: 'application/json'
  }
];
