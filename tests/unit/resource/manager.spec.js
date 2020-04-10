import { mount } from "@vue/test-utils";
import { getComponentPrototype } from "@/components/factory";

const localVue = global.localVue;
const store = global.store;
const getEntry = () => {
    return {};
}
const getNewEntry = () => {
    return {};
}
const wrapper = mount(getComponentPrototype("furet-ui-form-field-resource-manager"), {
  store,
  localVue,
  propsData: {
    config: {
        local_columns: ["local_key1", "local_key2"],
        remote_columns: ["remote_key1", "remote_key2"],
    },
    data: {},
    resource: {},
    x2m_resource: {
        pks: {
            "local_key1": "value1",
            "local_key2": "value2",
        }
    }
  },
  provide: {
    getEntry,
    getNewEntry
  }
});

describe("Resource.manager", () => {
  it("furet-ui-form-field-resource-manager.build_additional_filter", () => {
    expect(wrapper.vm.build_additional_filter()).toEqual({"remote_key1": "value1", "remote_key2": "value2"});
  });

});
