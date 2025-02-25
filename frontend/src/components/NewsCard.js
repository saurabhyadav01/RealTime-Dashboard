import React from "react";
import { Card, CardContent, Typography, List, ListItem, ListItemText } from "@mui/material";
import { Article } from "@mui/icons-material";

const NewsCard = ({ news }) => {
  if (!news) return null;

  return (
    <Card sx={{ boxShadow: 3, borderRadius: 3, p: 2 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          <Article sx={{ verticalAlign: "middle", color: "red" }} /> Latest News
        </Typography>
        <List>
          {news.map((article, index) => (
            <ListItem key={index} component="a" href={article.url} target="_blank" rel="noopener noreferrer">
              <ListItemText
                primary={article.title}
               
              />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default NewsCard;
