package com.rickhanberryfinal.config;

import org.springframework.boot.autoconfigure.web.WebMvcAutoConfiguration;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.DefaultServletHandlerConfigurer;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;

/**
 * Created by rhanberry on 2/25/2016.
 */

@Configuration
@EnableWebMvc
public class ResourceConfig extends WebMvcAutoConfiguration.WebMvcAutoConfigurationAdapter{

    @Override
    public void addResourceHandlers(final ResourceHandlerRegistry registry) {
        registry.addResourceHandler("/webapp/**").addResourceLocations("/webapp/");
        registry.addResourceHandler("/app/*").addResourceLocations("/app/");
        registry.addResourceHandler("/segments/*").addResourceLocations("/segments/");
        registry.addResourceHandler("/animals/**").addResourceLocations("/animals/");
        registry.addResourceHandler("/enclosures/**").addResourceLocations("/enclosures/");
        registry.addResourceHandler("/favoriteFoods/**").addResourceLocations("/favoriteFoods/");
        registry.addResourceHandler("/main/*").addResourceLocations("/main/");
        registry.addResourceHandler("/navbar/*").addResourceLocations("/navbar/");
        registry.addResourceHandler("/bower_components/**/*").addResourceLocations("/bower_components/");
    }


    @Override
    public void configureDefaultServletHandling(DefaultServletHandlerConfigurer configurer) {
        configurer.enable();
    }


}
