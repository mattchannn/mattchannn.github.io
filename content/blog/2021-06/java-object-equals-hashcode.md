---
title: "為何要override Objects的equals 和hashCode method"
date: 2021-06-01T18:00:00+08:00
publishdate: 2021-06-01T19:00:00+08:00
tags: ["java", "object", "override", ]
comments: true
---
# 為何要override Objects的equals 和hashCode method

你可曾有想過 在建構新class 新object的時候，為何我們要覆寫(override) Java/Lang/Object 中的equals 和hashCode方法(method)?

在開始之前，我們必先知道原本的方法是在實現什麼東西。

### Equals
```sh
// Java Lang Object
public boolean equals(Object obj) {
    return (this == obj);
}
```
Equals會將兩個object的memory address比較， 如果相等， 回傳true。
簡單來說，當你instantiate 兩個不同object的時候， 儘管它們的數值一樣，該方法都會回傳false。

Employee.java
```sh
public class Employee {
    private Integer id;
    private String firstname;
    private String lastName;
    private String department;
    
    public void setId(Integer id) {
        this.id = id;
    }
}
```

Main.java
```sh
<-- 省略 -->
Employee e1 = new Employee();
Employee e2 = new Employee();

e1.setId(100);
e2.setId(100);

System.out.println(e1.equals(e2));  // true
```

### hashCode
hashCode方面，它則會根據物件(object)的memory address去生成一個Integer value。而同樣地，如果兩者的memory address一樣，hashcode也會一樣。

### 為何要override equals()
最簡單的解釋，就是我們不想只比較兩者的reference equality (即等於比較memory address) 而希望檢查logical equality (值的相等)。
再直接點說，你其實希望有你心目中的比較方式。

### 為何要override hashCode()
如果equals方法被覆寫而hashCode方法沒有，hash-based的物件 (例如: HashMap, HashSet, HashTable) 就會表現異常。

承上
```sh
Set<Employee> employees = new HashSet<>();

employees.add(e1);
employees.add(e2);
```
如果使用debug mode去查看employees，你會發現有兩個重複的object被insert進去，編者估計原因是即使現在比較兩個object的logic已經被覆寫。

但基誨hashCode的方法沒有被覆寫，而導致兩個值一樣的物件會被放進不同Bucket，而當它們被新增的時候，就會分別地被新增 (我估計Object Class背後會跑一次equals跟hashCode method去決定如何做deduplication)。

因此，總括而言，當你需要比較兩個物件的時候，而又是使用Hash-based物件，就要記得覆寫兩個方法。


&nbsp;
### 參考資料
[CPE102 - How and why to override the equals method in Java...](http://users.csc.calpoly.edu/~gfisher/classes/102/info/howToOverrideEquals.html)

[Java hashCode() and equals() – Contract, rules and best practices](https://howtodoinjava.com/java/basics/java-hashcode-equals-methods/)

[Why do we need to override equals and hashcode methods in Java?](https://www.techiedelight.com/why-override-equals-and-hashcode-methods-java/)