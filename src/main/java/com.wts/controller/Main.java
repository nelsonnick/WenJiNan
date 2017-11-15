package com.wts.controller;

import com.jfinal.core.Controller;

public class Main extends Controller {
  public void index() {
    System.out.println("aa");
    render("/static/html/DepartmentTree.html");
  }
  public void l(){
    getResponse().addHeader("Access-Control-Allow-Origin", "*");
    System.out.println(getPara("id"));
  }
}