const MemberController = require("../controllers/member.controller");

module.exports = (app) => {
  app.get("/api/members", MemberController.findMembers);
  app.get("/api/members/:id", MemberController.getMemberById);
  app.post("/api/members", MemberController.createMember);
  app.put("/api/members/:id", MemberController.updateMember);
  app.delete("/api/members/:id", MemberController.deleteMember);
};
