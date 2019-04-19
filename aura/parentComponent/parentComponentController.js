({
    myAction : function(component, event, helper) {

    },
    doAddition : function (component,helper)
    {
       var value1 = component.get("v.value1");
       var value2 = component.get("v.value2");
       component.set(v.sum,value1+value2);

    }
})
