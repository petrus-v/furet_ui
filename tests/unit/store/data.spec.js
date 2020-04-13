import { update_change_object } from "@/store/modules/data";

describe("store.data", () => {
  it("test new data", () => {
    const state = {
      "model.1": {
        '[["id",1]]': {}
      }
    };
    const action = {
      model: "model.1",
      pk: { id: 1 },
      uuid: undefined,
      fieldname: "items",
      value: [{
        __x2m_state: "ADDED",
        uuid: "fake_uuid_tag2"
      }],
      merge: {
        "model.2": {
          new: {
            fake_uuid_tag2: { name: "test 2" }
          }
        }
      }
    };
    expect(update_change_object(state, action)).toEqual({
      "model.1": {
        '[["id",1]]': {
          items: [
            { __x2m_state: "ADDED", uuid: "fake_uuid_tag2" }
          ]
        }
      },
      "model.2": {
        new: {
          fake_uuid_tag2: { name: "test 2" }
        }
      }
    });
  });

  it("update_change_object", () => {
    const state = {
      "model.1": {
        '[["id",1]]': {
          items: [{ __x2m_state: "ADDED", uuid: "fake_uuid_tag1" }]
        }
      },
      "model.2": {
        new: {
          fake_uuid_tag1: { name: "test" }
        }
      }
    };
    const action = {
      model: "model.1",
      pk: { id: 1 },
      uuid: undefined,
      fieldname: "items",
      value: [{
        __x2m_state: "ADDED",
        uuid: "fake_uuid_tag2"
      }],
      merge: {
        "model.2": {
          new: {
            fake_uuid_tag2: { name: "test 2" }
          }
        }
      }
    };
    expect(update_change_object(state, action)).toEqual({
      "model.1": {
        '[["id",1]]': {
          items: [
            { __x2m_state: "ADDED", uuid: "fake_uuid_tag1" },
            { __x2m_state: "ADDED", uuid: "fake_uuid_tag2" }
          ]
        }
      },
      "model.2": {
        new: {
          fake_uuid_tag1: { name: "test" },
          fake_uuid_tag2: { name: "test 2" }
        }
      }
    });
  });
});
