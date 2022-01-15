package com.solitapreassignment.farmdata.data;

import com.fasterxml.jackson.databind.MappingIterator;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;
import com.fasterxml.jackson.dataformat.csv.CsvMapper;
import com.fasterxml.jackson.dataformat.csv.CsvSchema;

import java.io.File;
import java.math.BigDecimal;

public class OrderLine {
    private String item;
    private int quantity;
    private BigDecimal unitPrice;

    // Constructors, Getters, Setters and toString

}