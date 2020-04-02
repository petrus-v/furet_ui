import { mount } from "@vue/test-utils";
import { getComponentPrototype } from "@/components/factory";

const localVue = global.localVue;
const store = global.store;
const router = global.router;
const mock_router_push = jest.spyOn(router, "push");

describe("furet-ui-breadcrumb", () => {
  const Breadcrumb = getComponentPrototype("furet-ui-breadcrumb");

  it("Empty", () => {
    const wrapper = mount(Breadcrumb, {
      store,
      localVue
    });
    expect(wrapper.element).toMatchSnapshot();
  });

  it("with data", () => {
    store.commit("PushBreadcrumb", {
      label: "Home",
      icon: "home"
    });
    store.commit("PushBreadcrumb", {
      label: "User",
      icon: "user"
    });
    store.commit("PushBreadcrumb", {
      label: "Without icon"
    });
    store.commit("PushBreadcrumb", {
      label: "Null icon",
      icon: null
    });
    const wrapper = mount(Breadcrumb, {
      store,
      localVue
    });
    expect(wrapper.element).toMatchSnapshot();
  });

  it("makes sure end of history is removed after a click on an item", async () => {
    store.commit("ClearBreadcrumb");
    store.commit("PushBreadcrumb", {
      label: "Home",
      icon: "home",
      route: "Go to home"
    });
    store.commit("PushBreadcrumb", {
      label: "User",
      icon: "user",
      route: "Go to user"
    });
    store.commit("PushBreadcrumb", {
      label: "something else",
      route: "Go to somewhere else"
    });
    const wrapper = mount(Breadcrumb, {
      store,
      localVue,
      router
    });
    // Only Home should be display after clicking on User element
    await wrapper
      .findAll("li")
      .at(1)
      .find("a")
      .trigger("click");
    expect(wrapper.findAll("li").length).toBe(1);
    expect(mock_router_push).toHaveBeenLastCalledWith("Go to user");
    expect(wrapper.element).toMatchSnapshot();
  });
});
