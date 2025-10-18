const chai = require('chai');
const expect = chai.expect;
const { getUserTasks } = require('../controller/User.js');
const { User } = require('../model/User.js');

describe('User Controller', () => {
  describe('getUserTasks', () => {
    it('should return tasks for a valid user', async () => {
      const req = {
        query: {
          email: 'test@example.com'
        }
      };
      const res = {
        json: (data) => {
          expect(data).to.be.an('array');
          expect(data).to.have.lengthOf(1);
          expect(data[0]).to.have.property('name', 'Test Task');
        },
        status: (code) => {
          return {
            json: (data) => {
              // Should not be called
            }
          }
        }
      };

      // Mock the User model
      const user = new User({
        email: 'test@example.com',
        tasks: [{
          name: 'Test Task',
          completed: false
        }]
      });
      await user.save();

      await getUserTasks(req, res);
    });

    it('should return 404 for a non-existent user', async () => {
      const req = {
        query: {
          email: 'nonexistent@example.com'
        }
      };
      const res = {
        status: (code) => {
          expect(code).to.equal(404);
          return {
            json: (data) => {
              expect(data).to.have.property('message', 'Cannot find user');
            }
          }
        }
      };

      await getUserTasks(req, res);
    });
  });
});
